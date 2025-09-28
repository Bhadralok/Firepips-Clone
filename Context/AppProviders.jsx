import { UserProvider } from "./UserContext";
import { DataProvider } from "./DataContext";

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <DataProvider>{children}</DataProvider>
    </UserProvider>
  );
}
