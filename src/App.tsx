import SkipPage from "@/components/SkipPage";
import PageWrapper from "@/layouts/PageWrapper";
import ActionBar from "@/components/ActionBar";
import { SkipProvider } from "@/contexts/skipContext";

function App() {
  return (
    <div>
      <SkipProvider>
        <PageWrapper>
          <SkipPage />
          <ActionBar />
        </PageWrapper>
      </SkipProvider>
    </div>
  );
}

export default App;
