import Link from "next/link"
import LineBreak from "../../components/LineBreak"

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Langmap</h1>
          <div>
            A <Link href='https://edoliberty.github.io/vector-search-class-notes/'>COS 597A</Link> Project
            <br/>
            Powered by <Link href='https://pinecone.io'>Pinecone</Link>
          </div>
        </header>
        <LineBreak />
        <div className='copy'>
          <div>
            This page explores how text in different languages affects OpenAI's <span className='mono'>text-embedding-ada-002</span> vector embedding model.

          </div>
        </div>
      </main>
      <footer>
        <LineBreak/>
        © {new Date().getFullYear()} <Link href='https://archiemckenzie.com'>Archie McKenzie</Link>
      </footer>
    </>
  )
}
