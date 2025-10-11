function Footer() {
  return (
    <footer className="mt-auto w-full py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="https://github.com/ikin-dev" className="text-gray-500 font-semibold hover:text-gray-400">&lt;/&gt; ikin-dev</a>

        <div className="flex gap-6">
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="https://github.com/FairyKey/FairyKey" className="hover:text-gray-400">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer