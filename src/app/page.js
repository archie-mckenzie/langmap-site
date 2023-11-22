import Link from "next/link"
import LineBreak from "../../components/LineBreak"
import SimilarityMatrix from "../../components/SimilarityMatrix"
import OutlierMatrix from "../../components/OutlierMatrix"
import Dynamic3DScatterPlot from "../../components/Dynamic3DScatterPlot"

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
          <ol>
            <li><Link href='#research-questions' >Research Questions</Link></li>
            <li><Link href='#approach' >Approach</Link></li>
            <li><Link href='#implementation' >Implementation</Link></li>
            <li><Link href='#results' >Results</Link></li>
            <li><Link href='#conclusion'>Conclusion</Link></li>
          </ol>
          <p id="research-questions"><b>Research Questions</b></p>
          <ul>
            <li>How accurate is cosine similarity at detecting sentences with the same semantic meaning across languages?</li>
            <li>How well does <span className='mono'>ada-002</span> identify and cluster inputs of the same language?</li>
          </ul>
          <p id="approach"><b>Approach</b></p>
          <p>
            I sourced 6696 sentences from <Link href='https://tatoeba.org' target="__blank">Tatoeba</Link>, a digital repository of sentences and translations.
            These 6696 sentences were translated into 8 different languages:
          </p>
          <p className='mono'>
            French (fr), Spanish (es), German (de), Chinese (zh), Japanese (jp), Russian (ru), Portuguese (pt), and English (en)
          </p>
          <p>
            I chose these languages because they are <Link href='https://www.optimational.com/blog/top-10-popular-languages-used-internet/' target="__blank">among</Link> the most prevalent languages on the internet. Because they are widely spoken, well-documented languages, it was more likely that <span className='mono'>ada-002</span> could embed them accurately.
            Tatoeba had translations for 6966 sentences across these 8 languages, for a total of 53568 sentences.
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
          <p>Where <span className='mono'>[i][j]</span> is the similarity between the sentence in language <span className='mono'>i</span> and language <span className='mono'>j</span>,  in the order of the typical collection above.</p>
          <p>All 6696 of these matrices were averaged to produce a single mean similarity matrix:</p>
          <SimilarityMatrix />
          <p>Download the data <Link href='mean_similarities.json' target='_blank'>here</Link>.</p>
          <p>This shows how similar, on average, a sentence in one language is to a sentence with the same meaning in another language, according to <span className='mono'>ada-002</span>.</p>
          <p>In addition, each sentence embedding was queried to the Pinecone index, with <span className='mono'>top_k=8</span>. Matches from these queries which were not translations of the same sentence were recorded as outliers.</p>
          <p>Below, rows are the language of the sentence that was embedded and columns are the languages of the sentences which were "wrongly" returned. Values are the absolute number of false matches, out of the 53568 for each language. Note that this matrix is not symmetric, for example, the number of English-language false positives from French queries is 432, while the number of French-language false positives from English-language queries is 249.</p>
          <OutlierMatrix />
          <p>Download the data <Link href='outlier_tally.json' target='_blank'>here</Link>.</p>
          <p id='3d-scatter-plot'>Finally, I used PCA projection as discussed in class to visualize how languages were clustered in three dimensions. Below is a 3D scatter plot of 250 sentences, randomly selected from the 53568, with a maximum of 1 from each of the 6696 groups of translations. Scroll down to analysis of the 3D scatter plot <Link href='#pca-projection'>here</Link>.</p>
          <Dynamic3DScatterPlot/>
          <p>Download the data <Link href='pca_points.json' target='_blank'>here</Link>.</p>
          <p>Interpretations of these results are discussed in the <Link href="#results">Results</Link> section.</p>
          <p id="implementation"><b>Implementation</b></p>
          <p>After downloading all the data from <Link href='https://tatoeba.org/en/downloads' target="_blank">Tatoeba</Link>, run <span className='mono'>create_pairs.py</span> (<Link href='https://github.com/archie-mckenzie/langmap/blob/main/scripts/create_pairs.py' target="_blank">Link</Link>). This script processes multiple tab-separated values (TSV) files containing translation data. It reads each file, which corresponds to a different language dataset, and builds a dictionary where each key represents a unique identifier and each value is a list of translations of a phrase into various languages. The script ensures that each phrase has a translation in all the specified languages. It removes duplicate translations across languages and retains only those phrases with a complete set of translations. Finally, the script saves the filtered data as a JSON file, where each entry contains translations of a phrase across the specified languages and the unique identifier for that phrase.</p>
          <p>The next script, <span className='mono'>embed_and_store.py</span> (<Link href='https://github.com/archie-mckenzie/langmap/blob/main/scripts/embed_and_store.py' target="_blank">Link</Link>), processes a JSON file containing sentences and generate vector embeddings for these sentences using OpenAI's embedding model. It then stores these embeddings in a Pinecone index for efficient similarity searching and retrieval.</p>
          <p>Key steps in <span className='mono'>embed_and_store.py</span> include:</p>
          <ol>
            <li>Loading environment variables, including API keys for OpenAI and Pinecone.</li>
            <li>Initializing Pinecone with the provided API key and environment settings.</li>
            <li>Reading sentences from a specified JSON file.</li>
            <li>Checking if a Pinecone index with a given name already exists. If it doesn't, the script creates a new index with specified dimensions. If the index already exists, the script prompts for confirmation to proceed.</li>
            <li>Connecting to the Pinecone index.</li>
            <li>Iterating over the sentences, generating embeddings using the specified OpenAI model, and storing these embeddings along with metadata in the Pinecone index.</li>
            <li>Saving all generated embeddings in a local JSON file for future use.</li>
          </ol>
          <p>The final script is <span className='mono'>langmap.py</span> (<Link href="https://github.com/archie-mckenzie/langmap/blob/main/langmap.py" target="_blank">Link</Link>), which processes and visualizes linguistic data to analyze the relationship between sentences in different languages based on their vector representations. It performs three key functions: </p>
          <ol>
          <li><b>Similarity Analysis</b>: The script calculates cosine similarities between all pairs of sentence vectors for each of the 6696 groups, generating a matrix of similarity scores for each. This matrix reflects the relationships between the same sentence in different languages according to <span className='mono'>ada-002</span>.
          <pre>
          def calculate_all_similarities(vectors):<br/>
          <span>  </span>similarities = [[] for _ in range(len(vectors))]<br/>
          <span>  </span>for i in range(len(vectors)):<br/>
          <span>  </span><span>  </span>for j in range(i, len(vectors)):<br/>
          <span>  </span><span>  </span><span>  </span>similarity = cosine_similarity(vectors[i], vectors[j])<br/>
          <span>  </span><span>  </span><span>  </span>similarities[i].append(similarity)<br/>
          <span>  </span><span>  </span><span>  </span>if (i != j):<br/>
          <span>  </span><span>  </span><span>  </span><span>  </span>similarities[j].append(similarity)<br/>
          <span>  </span>return similarities<br/>
          </pre>
          <p>The 6696 matrices produced using the function above are averaged to produce a single mean similarity matrix.</p>
          </li>
          <li><b>Outlier Detection</b>: The script queries the Pinecone index to find outliers, i.e., instances where sentences that are translations of each other in different languages do not closely match in vector space. This helps identify pairs of languages where translations may not align well in vector representations.</li>
          <li>
            <b>PCA Visualization</b>: It performs Principal Component Analysis (PCA) to reduce the dimensionality of the vectors for visualization. The script then plots these reduced vectors in a 3D space, color-coded by language, allowing for a visual inspection of how sentences from different languages cluster together. To display the plot in 3D when the script runs, uncomment the following line:
            <pre>
            166<span>   </span># plt.show()
            </pre>
          </li>
          </ol>
          <p>Finally, the <span className="mono">langmap.py</span> writes the computed similarity matrices, outlier tallies, and PCA points to JSON files.</p>
          <p>To try it for yourself, download the <Link href='https://github.com/archie-mckenzie/langmap' target="__blank">code</Link> and follow the instructions in <span className='mono'>README.md</span>.</p>
          <p id="results"><b>Results</b></p>
          <p><i>Mean Similarities</i></p>
          <SimilarityMatrix />
          <p>Consistently, English has a higher cosine similarity to semantically similar sentences than the other languages. (You can also see this on the PCA visualization, where English is close to the center of the projection.) My hypothesis on this result is that because English is likely the most well-documented language in <span className="mono">ada-002</span>'s training dataset, the embedding model is more sophisticated at associating English sentences with their translations.</p>
          <p>The two most similar languages, unsurprisingly, are Spanish and Portuguese. Spanish and Portuguese are both Romance languages, descended directly from spoken Latin. They share much of their vocabulary and grammar, so it is not surprising that their <span className='mono'>ada-002</span> similarity would be high.</p>
          <p>Chinese and Japanese are generally dissimilar to other languages. Their highest similarities are to each other, at 0.878. Although they are not linguistically related, Chinese and Japanese partially share a writing system due to Japanese <i>kanji</i>, which are adapted versions of Chinese <i>hanzi</i>.</p>
          <p><i>Outlier Tally</i></p>
          <OutlierMatrix />
          <p>This can also be seen in the number of false positives in the Pinecone queries for each sentence in each language.</p>
          <p><span className="mono">ada-002</span> returns false positives in the same language far more often than false positives in any other language, especially for Chinese, Japanese, and Russian, the three languages with alternate writing systems.</p>
          <p>English-language queries are least likely to produce false positives. I suspect this result is also because it is the most well-documented language in <span className="mono">ada-002</span>'s training dataset.</p>
          <p>Across all languages, English sentences are returned as mistaken matches most frequently. However, Spanish and Portuguese, as well as Chinese and Japanese, are often returned in the top 8 most similar sentences to each other.</p>
          <p>For example, the number of Japanese-language false positives from Chinese-language queries was 668. This is far more than the 9 outlier French sentences, 16 Spanish, 5 German, 21 Russian, and 3 Portuguese.</p>
          <p>(An anecdote related to the elevated similarity scores between Russian and Chinese: when I was learning Mandarin, we used Soviet textbooks which had been translated from Russian because they were considered higher quality.)</p>
          <p id='pca-projection'><i>PCA Projection</i></p>
          <p>Scroll up to the 3D scatter plot <Link href='#3d-scatter-plot'>here</Link>.</p>
          <p>English sentences are closer to the center of the projection, reflecting their elevated <span className='mono'>ada-002</span> similarities to other languages. Spanish and Portuguese overlap, as do Chinese and Japanese. Russian, the only language of the 8 written in Cyrillic script, is isolated to one side. These observations conform with expectations that <span className='mono'>ada-002</span> is more influenced by the writing system than by the linguistic or grammatical structure of the languages, though it <i>is</i> influenced by both, as demonstrated in the similarity matrix.</p>
          <p id='conclusion'><b>Conclusion</b></p>
          <p><b>Overall</b>, this research suggests that <b>between 10% and 15% of cosine similarity scores as calculated using <span className='mono'>ada-002</span> embeddings are language-related</b>, with the remainder being related to content and length of input. <span className='mono'>ada-002</span> is OpenAI's foremost text embedding model, used widely in industry. Therefore, this result has relevant implications for applications like semantic search, where a better understanding of the balance between language-related and content-related similarities is important for accurate information retrieval.</p>
        </div>
      </main>
      <footer>
        <LineBreak/>
        © {new Date().getFullYear()} <Link href='https://archiemckenzie.com' target="__blank">Archie McKenzie</Link>
      </footer>
    </>
  )
}
