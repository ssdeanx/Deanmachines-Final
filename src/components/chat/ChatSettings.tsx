"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Sparkles, Settings2 } from "lucide-react";
import { Loader2 } from "lucide-react";

// DTO & Zod schema for settings
type ChatSettingsDTO = {
  notifications: boolean;
  darkMode: boolean;
};

const settingsSchema = z.object({
  notifications: z.boolean(),
  darkMode: z.boolean(),
});

type SettingsForm = z.infer<typeof settingsSchema>;

// Simulated API functions (replace with real API/Mastra integration)
async function fetchSettings(): Promise<ChatSettingsDTO> {
  // Replace with real API call
  return { notifications: true, darkMode: false };
}
async function saveSettings(data: ChatSettingsDTO): Promise<ChatSettingsDTO> {
  // Replace with real API call
  return data;
}

export function ChatSettings() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["chat-settings"],
    queryFn: fetchSettings,
  });
  const mutation = useMutation({
    mutationFn: saveSettings,
    onSuccess: (data) => {
      queryClient.setQueryData(["chat-settings"], data);
    },
  });

  const form = useForm<SettingsForm>({
    resolver: zodResolver(settingsSchema),
    defaultValues: data || { notifications: true, darkMode: false },
    values: data,
    mode: "onChange",
  });

  // Update form when data loads
  // (react-hook-form v7+ supports values prop for dynamic updates)

  return (
    <section
      className="relative w-full max-w-md mx-auto bg-card-membrane/80 border border-[var(--color-border)] rounded-2xl shadow-xl p-6 mt-4 mb-2 flex flex-col gap-5 animate-fadeIn backdrop-blur-lg"
      aria-label="Chat settings"
    >
      {/* Bio Mech Weav SVG Overlay */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10 -z-10" aria-hidden>
        <defs>
          <linearGradient id="settings-fiber" x1="0" y1="0" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-primary)" />
          </linearGradient>
        </defs>
        <path d="M0,24 Q48,48 96,24 T192,24" fill="none" stroke="url(#settings-fiber)" strokeWidth="4" opacity="0.13" />
      </svg>
      <header className="flex items-center gap-3 mb-2">
        <Settings2 className="w-6 h-6 text-accent animate-fadeIn" />
        <h2 className="text-lg font-bold text-[var(--color-foreground)]">Chat Settings</h2>
      </header>
      {isLoading ? (
        <div className="flex items-center gap-2 text-muted-foreground"><Loader2 className="w-4 h-4 animate-spin" /> Loading…</div>
      ) : (
        <form
          onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
          className="flex flex-col gap-5"
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-[var(--color-foreground)]">Enable Notifications</span>
            <Switch
              checked={form.watch("notifications")}
              onCheckedChange={(v) => form.setValue("notifications", v)}
              aria-label="Toggle notifications"
            />
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-[var(--color-foreground)]">Dark Mode</span>
            <Switch
              checked={form.watch("darkMode")}
              onCheckedChange={(v) => form.setValue("darkMode", v)}
              aria-label="Toggle dark mode"
            />
          </div>
          <Button
            variant="outline"
            className="mt-4 self-end"
            aria-label="Save settings"
            type="submit"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-1" />}
            Save
          </Button>
        </form>
      )}
    </section>
  );
}

export default ChatSettings;
