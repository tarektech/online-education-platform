export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-orange-50">
          Online Education Platform
        </h1>
        <p className="mt-4 text-grey-30">Welcome to our learning platform</p>

        {/* Color Showcase */}
        <div className="mt-12 space-y-8">
          {/* Orange Shades */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Orange Shades</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-6 bg-orange-50 text-white rounded">50</div>
              <div className="p-6 bg-orange-70 text-white rounded">70</div>
              <div className="p-6 bg-orange-75 text-grey-20 rounded">75</div>
              <div className="p-6 bg-orange-80 text-grey-20 rounded">80</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-6 bg-orange-90 text-grey-20 rounded">90</div>
              <div className="p-6 bg-orange-95 text-grey-20 rounded">95</div>
              <div className="p-6 bg-orange-97 text-grey-20 rounded">97</div>
              <div className="p-6 bg-orange-99 text-grey-20 rounded">99</div>
            </div>
          </div>

          {/* White Shades */}
          <div>
            <h2 className="text-xl font-semibold mb-4">White Shades</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-6 bg-white-90 text-grey-20 rounded">90</div>
              <div className="p-6 bg-white-95 text-grey-20 rounded">95</div>
              <div className="p-6 bg-white-97 text-grey-20 rounded">97</div>
              <div className="p-6 bg-white-99 text-grey-20 rounded">99</div>
            </div>
          </div>

          {/* Grey Shades */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Grey Shades</h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="p-6 bg-grey-10 text-white rounded">10</div>
              <div className="p-6 bg-grey-15 text-white rounded">15</div>
              <div className="p-6 bg-grey-20 text-white rounded">20</div>
              <div className="p-6 bg-grey-30 text-white rounded">30</div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="p-6 bg-grey-35 text-white rounded">35</div>
              <div className="p-6 bg-grey-40 text-white rounded">40</div>
              <div className="p-6 bg-grey-60 text-white rounded">60</div>
              <div className="p-6 bg-grey-70 text-grey-20 rounded">70</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
