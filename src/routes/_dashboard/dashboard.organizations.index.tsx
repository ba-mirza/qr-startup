import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";
import { Container } from "@/components/Container";

export const Route = createFileRoute("/_dashboard/dashboard/organizations/")({
  component: Organization,
});

function Organization() {
  const navigate = useNavigate();

  const createOrganization = () => {
    navigate({ to: '/dashboard/organizations/new' });
  };

  return (
    <Container>
      <section className="mt-10">
        <h1 className="text-2xl font-bold text-blue-600">Create Organization</h1>

        <div className="border-gray-300 border w-full h-auto rounded-lg p-4 bg-violet-100 flex flex-col justify-center mt-2">
          <h2 className="text-violet-500 text-2xl font-bold">Warning</h2>
          <p className="text-gray-600">You can only create one organization per account.</p>
        </div>

        <div className="mt-10">
          <div className="flex space-x-8 items-center">
            {
              Array.from({ length: 2 }).map((_, index) => {
                const isDisabled = index === 0;

                return (
                  <button
                    onClick={createOrganization}
                    key={index}
                    disabled={isDisabled}
                    aria-disabled={isDisabled}
                    aria-label={isDisabled ? "Organization creation in progress" : "Create new organization"}
                    className={`
                      flex items-center justify-center
                      border rounded-lg
                      w-80 h-80
                      transition-all
                      ${isDisabled
                        ? 'border-gray-100 bg-gray-50 cursor-not-allowed opacity-60'
                        : 'border-gray-200 hover:bg-blue-50 hover:border-blue-200 cursor-pointer active:scale-95'
                      }
                    `}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <PlusIcon
                        size={30}
                        className={isDisabled ? 'text-gray-300' : 'text-gray-500'}
                      />
                      <span className={isDisabled ? 'text-gray-400' : 'text-gray-500'}>
                        Create Organization
                      </span>
                      {isDisabled && (
                        <span className="text-xs text-gray-400 mt-1">
                          Please wait...
                        </span>
                      )}
                    </div>
                  </button>
                );
              })
            }
          </div>
        </div>
      </section>
    </Container>
  );
}
