import Hero from '@/components/Hero'
import ProductGrid from '@/components/ProductGrid'
import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <ContactForm />
      <Footer />
    </main>
  )
}