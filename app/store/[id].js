import ProductDetails from './parts/product.details';
import { useRouter } from 'next/router';

export default function ProductPage() {
    const router = useRouter();
    return (
        <>
            <ProductDetails id={router.query.id} />
        </>
    )
}