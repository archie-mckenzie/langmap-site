import Link from "next/link"
import LineBreak from "../../../components/LineBreak"
import Dynamic3DScatterPlot from "../../../components/Dynamic3DScatterPlot"
import OutlierMatrix from "../../../components/OutlierMatrix"
import SimilarityMatrix from "../../../components/SimilarityMatrix"

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
        <br/>
        <div className='copy'>
            <hr/>
            <p>Read the full research and see the rest of the data <Link href='/' target='_blank'>here</Link>.</p>
            <hr/>
            <p id='pca-projection'><i>PCA Projection</i></p>
            <Dynamic3DScatterPlot />
            <p id='3d-scatter-plot'>I used PCA projection as discussed in class to visualize how <span className='mono'>ada-002</span> clustered text in different languages in three dimensions.</p>
            <p className='mono'>
            French (fr), Spanish (es), German (de), Chinese (zh), Japanese (jp), Russian (ru), Portuguese (pt), and English (en)
            </p>
            <p>Above is a 3D scatter plot of 250 sentences with different semantic meanings.</p>
            <p>Download the data <Link href='pca_points.json' target='_blank'>here</Link>.</p>
            <hr/>
            <p><i>Mean Similarities</i></p>
            <SimilarityMatrix />
            <p>Where <span className='mono'>[i][j]</span> is the average cosine similarity between the embeddings of sentences in language <span className='mono'>i</span> and language <span className='mono'>j</span>.</p>
            <hr/>
            <p><i>Outlier Tally</i></p>
            <OutlierMatrix />
            <p>Where rows are the language of the sentence that was embedded and columns are the languages of the sentences which were "wrongly" returned. Values are the absolute number of false matches, out of the 53568 for each language. Note that this matrix is not symmetric, for example, the number of English-language false positives from French queries is 432, while the number of French-language false positives from English-language queries is 249.</p>
        </div>
      </main>
      <footer>
        <LineBreak/>
        © {new Date().getFullYear()} <Link href='https://archiemckenzie.com' target="__blank">Archie McKenzie</Link>
      </footer>
    </>
  )
}
