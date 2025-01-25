interface RemainingReactionsProps {
  count: number;
  totalCount: number;
}

export const RemainingReactionsButton = ({ count, totalCount }: RemainingReactionsProps) => {
  if (count === 0) return null;

  return (
    <button className="relative group text-xs font-medium text-purple-400 hover:scale-110 transition-transform duration-200 ml-1">
      <span>+{count}</span>
      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        {totalCount} reactions
      </span>
    </button>
  );
};