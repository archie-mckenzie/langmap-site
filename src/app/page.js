import Link from "next/link"
import LineBreak from "../../components/LineBreak"

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
          <p>
            This page explores how text in different languages affects OpenAI's <span className='mono'>ada-002</span> text embedding model.
            Code for the <Link href='https://github.com/archie-mckenzie/langmap' target="__blank">research itself</Link> and <Link target="__blank" href='https://github.com/archie-mckenzie/langmap-site'>this site</Link> are freely available on GitHub under an MIT License. 
          </p>
          <p><b>Research Questions</b></p>
          <ul>
            <li>How accurate is cosine similarity at detecting sentences with the same semantic meaning across languages?</li>
            <li>How well does <span className='mono'>ada-002</span> identify and cluster inputs of the same language?</li>
          </ul>
          <p><b>Approach</b></p>
          <p>
            I sourced 6696 sentences from <Link href='https://tatoeba.org' target="__blank">Tatoeba</Link>, a digital repository of sentences and translations.
            These 6696 sentences were translated into 8 different languages:
          </p>
          <p>
            English, Spanish, French, German, Chinese, Japanese, Russian, and Portuguese
          </p>
          <p>
            I chose these languages because they are <Link href='https://www.optimational.com/blog/top-10-popular-languages-used-internet/' target="__blank">among</Link> the most prevalent languages on the internet. Because they are widely spoken, well-documented languages, it was more likely that <span className='mono'>ada-002</span> could embed them accurately.
            Tatoeba had translations for 6966 languages across these 8 languages, for a total of 53568 sentences.
          </p>
          <p>
            A typical collection of 8 sentences looks like:
            
          </p>
          <pre>
            [
              "Il faut que j'aille dormir.",
              <br/>
              "Tengo que irme a dormir.",
              <br/>
              "Ich muss jetzt schlafen.",
              <br/>
              "我该去睡觉了。",
              <br/>
              "私は眠らなければなりません。",
              <br/>
              "Мне пора идти спать.",
              <br/>
              "Preciso ir dormir.",
              <br/>
              "I have to go to sleep."
            ]
          </pre>
          <p>These 53568 sentences were embedded using <span className='mono'>ada-002</span> and stored in a Pinecone vector database.</p>
          <p>For each collection of 8 sentences, I compared each sentence in that collection to every other sentence using cosine similarity. This generated a symmetric "similarity matrix", which looks something like:</p>
          <pre>[[1.0, 0.889, 0.883, 0.874, 0.841, 0.832, 0.889, 0.908],<br/>[0.889, 1.0, 0.866, 0.879, 0.823, 0.829, 0.907, 0.921],<br/>[0.883, 0.866, 1.0, 0.868, 0.83, 0.825, 0.865, 0.894],<br/>[0.874, 0.879, 0.868, 1.0, 0.853, 0.854, 0.861, 0.885],<br/>[0.841, 0.823, 0.83, 0.853, 1.0, 0.81, 0.813, 0.843],<br/>[0.832, 0.829, 0.825, 0.854, 0.81, 1.0, 0.831, 0.847],<br/>[0.889, 0.907, 0.865, 0.861, 0.813, 0.831, 1.0, 0.901],<br/>[0.908, 0.921, 0.894, 0.885, 0.843, 0.847, 0.901, 1.0]]</pre>
          
          <p><b>Implementation</b></p>
          <p><b>Results</b></p>
          <p><b>Further Reading</b></p>
        </div>
      </main>
      <footer>
        <LineBreak/>
        © {new Date().getFullYear()} <Link href='https://archiemckenzie.com' target="__blank">Archie McKenzie</Link>
      </footer>
    </>
  )
}
