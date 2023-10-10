interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="prose prose-slate prose-sky mt-6 max-w-none dark:prose-invert">
      {children}
    </div>
  );
}
