import { redirect } from 'next/navigation';

export default function AdminIndex() {
  // Redirect to the first settings page for this scaffolding
  redirect('/admin/settings/general');
}
