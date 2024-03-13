import { Button } from "@/components/ui/moving-border";
import { Meteors } from "./meteors";

const SectionTitle = ({
  title,
  meteor = 50,
}: {
  title: string;
  meteor?: number;
}) => {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
    >
      {title}
      <Meteors number={meteor} />
    </Button>
  );
};
export default SectionTitle;
