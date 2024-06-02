import { JSX } from "react";
import { DataTable } from "./containers";
import { DataProvider } from "./context";

const App = (): JSX.Element => {
  return (
    <DataProvider>
      <DataTable />
    </DataProvider>
  );
};

export default App;
