// Notification/toast for chat events
import { Toast, ToastTitle, ToastDescription, ToastAction } from "@/components/ui/toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ChatNotification({ message }: { message: string }) {
  return (
    <div className="fixed top-6 right-6 z-50 bg-[var(--color-card)] border border-[var(--color-border)] px-6 py-3 rounded-xl shadow-lg animate-fade-in">
      <span className="text-[var(--color-foreground)]">{message}</span>
    </div>
  );
}
