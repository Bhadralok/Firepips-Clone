import { UserProvider } from "./UserContext";
import { DataProvider } from "./DataContext";
import { ApiProvider } from "./ApiProvider";

export function AppProviders({ children }) {
  return (
    <UserProvider>
      <ApiProvider>
        <DataProvider>{children}</DataProvider>
      </ApiProvider>
    </UserProvider>
  );
}
