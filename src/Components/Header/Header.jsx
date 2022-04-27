const Header = () => {
  return (
    <header className="bg-white h-16 sticky top-0">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between h-full px-4">
        <h1 className="text-3xl font-bold">Jinx</h1>
        <div>
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="avatar"
            className="rounded-full h-12 w-12 max-w-full object-cover"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
