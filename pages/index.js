import Card from "../components/Card";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="text-gray-600 font-body grid md:grid-cols-3">
      <div className="md:col-span-1 md:flex md:justify-end">
        <Navbar />
      </div>
      <main className="px-16 py-6 bg-gray-100 md:col-span-2">
        <div className="text-primary flex justify-end">
          <a href="#" className="btn border-primary md:border-2 hover:bg-primary hover:text-white mr-2 transition ease-out duration-500">Log in</a>
          <a href="#" className="btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">Sign up</a>
        </div>
        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 className="text-2xl font-semibold">For Ninjas</h3>
        </header>

      {/* cards */}
        <div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <Card />
            <Card />
            <Card />
          </div>
          <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">Most Popular</h4>
          <div className="mt-8 grid lg:grid-cols-3 gap-10">
            <Card />
            <Card />
            <Card />
          </div>

          <div className="flex justify-center md:justify-end mt-4">
            <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
          </div>
        </div>
      </main>
    </div>
  )
}
