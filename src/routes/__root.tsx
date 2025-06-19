import { Outlet, createRootRoute } from "@tanstack/react-router";
import { PageWrapper } from "../ui/PageWrapper/PageWrapper";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  );
}
