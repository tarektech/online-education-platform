import Image from '@/components/Image';
const brands = [
  {
    id: '1',
    name: 'Zapier',
    image: '/online-education-website/images/brandlogos/zapier.png',
  },
  {
    id: '2',
    name: 'spotify',
    image: '/online-education-website/images/brandlogos/spotify.png',
  },
  {
    id: '3',
    name: 'zoom',
    image: '/online-education-website/images/brandlogos/zoom.png',
  },
  {
    id: '4',
    name: 'amazon',
    image: '/online-education-website/images/brandlogos/amazon.png',
  },
  {
    id: '5',
    name: 'adobe',
    image: '/online-education-website/images/brandlogos/adobe.png',
  },
  {
    id: '6',
    name: 'notion',
    image: '/online-education-website/images/brandlogos/notion.png',
  },
  {
    id: '7',
    name: 'netflix',
    image: '/online-education-website/images/brandlogos/netflix.png',
  },
];

function BrandCard() {
  return (
    <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-10 p-4 md:p-6 lg:p-10">
      {brands.map((brand) => (
        <div
          className="w-16 md:w-20 lg:w-24 aspect-square object-contain"
          key={brand.id}
        >
          <Image
            path={brand.image}
            alt={brand.name}
            width={200}
            height={50}
            priority
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandLogoSection() {
  return (
    <section className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-10">
      <BrandCard />
    </section>
  );
}
