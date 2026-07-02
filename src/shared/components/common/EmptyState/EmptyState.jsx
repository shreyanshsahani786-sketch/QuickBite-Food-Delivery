import Button from "@/shared/components/ui/Button";

function EmptyState({
  title,
  description,
  action,
}) {
  return (
    <div className="py-20 text-center">
      <h2 className="text-3xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-gray-500">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          <Button onClick={action.onClick}>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}

export default EmptyState;