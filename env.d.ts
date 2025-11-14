namespace NodeJS {
  interface ProcessEnv {
    // Public environment variables (exposed to browser)
    NEXT_PUBLIC_API_URL?: string;
    NEXT_PUBLIC_APP_NAME?: string;

    // Private environment variables (server-side only)
    DATABASE_URL?: string;
    API_SECRET_KEY?: string;
    NEXTAUTH_SECRET?: string;
    NEXTAUTH_URL?: string;
  }
}
