import SignIn from '@/components/sign-in'; // Adjust path if necessary
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login - DeanMachines AI',
    description: 'Log in to your DeanMachines AI account.',
};

export default function LoginPage() {
    return (
        <div className="container flex min-h-[calc(100vh-var(--header-height))] items-center justify-center py-12">
            <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
                    <CardDescription>
                        Sign in to access your account and manage your AI agents.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignIn />
                </CardContent>
            </Card>
        </div>
    );
}
