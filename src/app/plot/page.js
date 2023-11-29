import Link from "next/link"
import LineBreak from "../../../components/LineBreak"
import Dynamic3DScatterPlot from "../../../components/Dynamic3DScatterPlot"

export default function Home() {
  return (
    <>
      <main>
        <header>
          <h1>Langmap</h1>
          <div>
            A <Link href='https://edoliberty.github.io/vector-search-class-notes/' target="__blank">COS 597A</Link> Project
            <br/>
            Powered by <Link href='https://pinecone.io' target="__blank">Pinecone</Link>
          </div>
        </header>
        <br/><hr/>
        <div className='copy'>
            <p id='3d-scatter-plot'>I used PCA projection as discussed in class to visualize how <span className='mono'>ada-002</span> clustered text in different languages in three dimensions.</p>
            <p className='mono'>
            French (fr), Spanish (es), German (de), Chinese (zh), Japanese (jp), Russian (ru), Portuguese (pt), and English (en)
            </p>
            <p>Below is a 3D scatter plot of 250 sentences with different semantic meanings:</p>
            <Dynamic3DScatterPlot />
            <p>Download the data <Link href='pca_points.json' target='_blank'>here</Link>.</p>
            <p>Read the full research and see the rest of the data <Link href='/' target='_blank'>here</Link>.</p>
        </div>
      </main>
      <footer>
        <LineBreak/>
        © {new Date().getFullYear()} <Link href='https://archiemckenzie.com' target="__blank">Archie McKenzie</Link>
      </footer>
    </>
  )
}
