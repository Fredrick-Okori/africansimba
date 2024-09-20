import ProductDetails from './parts/product.details';
import { useSearchParams } from 'next/navigation';

export default function ProductPage() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    return (
        <>
            <ProductDetails id={id} />
        </>
    )
}