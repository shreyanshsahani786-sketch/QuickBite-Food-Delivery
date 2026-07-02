function SectionHeader({
  title,
  subtitle,
  action,
}) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

export default SectionHeader;