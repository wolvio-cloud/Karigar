/**
 * Secure logging utility for production.
 * Ensures that sensitive info (like exact Prisma stacks or keys) is NOT sent to the client
 * and provides a structured way to handle server logs for services like Sentry/Datadog.
 */

const isProduction = process.env.NODE_ENV === 'production';

type LogLevel = 'INFO' | 'WARN' | 'ERROR' | 'CRITICAL';

interface LogPayload {
  code?: string;
  message?: string;
  details?: any;
  digest?: string;
  [key: string]: any;
}

class Logger {
  private log(level: LogLevel, eventCode: string, payload?: LogPayload) {
    const timestamp = new Date().toISOString();
    
    // Sanitize payload to prevent logging secrets
    const safePayload = this.sanitize(payload);

    const logEntry = {
      timestamp,
      level,
      eventCode,
      ...safePayload
    };

    if (isProduction) {
      // In production, log as JSON string for external log aggregators (e.g., Datadog, AWS CloudWatch)
      console.log(JSON.stringify(logEntry));
    } else {
      // In development, log in a readable format
      if (level === 'ERROR' || level === 'CRITICAL') {
        console.error(`[${level}] ${eventCode}:`, safePayload);
      } else if (level === 'WARN') {
        console.warn(`[${level}] ${eventCode}:`, safePayload);
      } else {
        console.log(`[${level}] ${eventCode}:`, safePayload);
      }
    }
  }

  public info(eventCode: string, payload?: LogPayload) {
    this.log('INFO', eventCode, payload);
  }

  public warn(eventCode: string, payload?: LogPayload) {
    this.log('WARN', eventCode, payload);
  }

  public error(eventCode: string, payload?: LogPayload) {
    this.log('ERROR', eventCode, payload);
  }

  public critical(eventCode: string, payload?: LogPayload) {
    this.log('CRITICAL', eventCode, payload);
  }

  // Prevents logging known sensitive keys
  private sanitize(payload?: any): any {
    if (!payload) return {};
    
    const sensitiveKeys = ['password', 'secret', 'token', 'key', 'cvv', 'cardNumber', 'razorpay_signature'];
    
    if (typeof payload === 'object') {
      const sanitized = { ...payload };
      for (const key of Object.keys(sanitized)) {
        if (sensitiveKeys.some(sk => key.toLowerCase().includes(sk))) {
          sanitized[key] = '[REDACTED]';
        } else if (typeof sanitized[key] === 'object') {
          sanitized[key] = this.sanitize(sanitized[key]); // recursive sanitization
        }
      }
      
      // Also scrub Prisma errors nicely
      if (sanitized.message && typeof sanitized.message === 'string' && sanitized.message.includes('Prisma')) {
        sanitized.message = "Database operation failed. Raw stack redacted.";
      }
      
      return sanitized;
    }
    return payload;
  }
}

const logger = new Logger();
export default logger;
