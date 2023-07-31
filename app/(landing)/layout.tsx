const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-black via-gray-800 to-black animate-text overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
   );
}
 
export default LandingLayout;