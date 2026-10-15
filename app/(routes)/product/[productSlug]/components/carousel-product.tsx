/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface CarouselProductProps {
    images: {
        id: number;
        documentId: string; // Strapi 5 ahora usa documentId por defecto para la API pública
        url: string;
        alternativeText?: string; 
        name?: string;
    }[];
}


const CarouselProduct = (props: CarouselProductProps) => {

    const {images} = props


  return (
    <div className='sm:px-16' >
        <Carousel>

            <CarouselContent>
                {images.map((image) => (
                    <CarouselItem key={image.id} >
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                            alt="Image  product" 
                            className="rounded-b-lg" />
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />

        </Carousel>
    </div>
  )
}

export default CarouselProduct