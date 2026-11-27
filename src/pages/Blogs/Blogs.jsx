import { Link } from 'react-router-dom'
import PageBanner from '../../components/PageBanner'

export default function Blogs() {
  return (
    <>
      <PageBanner title="Blog" description="Insights on business automation and customer conversations." />
      <section className="section wrap section-intro">
        <h2>Articles are coming soon</h2>
        <Link className="button button-outline section-action" to="/products">Explore products</Link>
      </section>
    </>
  )
}
