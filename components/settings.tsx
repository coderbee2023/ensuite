"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SettingsGeneral from "./settings-general";

export default function Settings() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-2">Settings</h1>
      <p className="text-sm text-muted-foreground mb-6">
        View and manage your account settings here.
      </p>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="general" className="text-sm">
            General
          </TabsTrigger>
          <TabsTrigger value="preferences" className="text-sm">
            Preferences
          </TabsTrigger>
          <TabsTrigger value="billing" className="text-sm">
            Billing
          </TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <SettingsGeneral />
        </TabsContent>
        <TabsContent value="preferences">
          <p className="text-sm text-muted-foreground">
            Preferences content goes here.
          </p>
        </TabsContent>
        <TabsContent value="billing">
          <p className="text-sm text-muted-foreground">
            Billing content goes here.
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
