export default function SimilarityMatrix() {
    return (
        <table className='similarity-matrix'>
            <tbody>
                <tr>
                    <th></th>
                    <th>fr</th>
                    <th>es</th>
                    <th>de</th>
                    <th>zh</th>
                    <th>ja</th>
                    <th>ru</th>
                    <th>pt</th>
                    <th>en</th>
                </tr>
                <tr>
                    <td><strong>fr</strong></td>
                    <td>1.0</td>
                    <td>0.882</td>
                    <td>0.88</td>
                    <td>0.843</td>
                    <td>0.841</td>
                    <td>0.84</td>
                    <td>0.877</td>
                    <td>0.9</td>
                </tr>
                <tr>
                    <td><strong>es</strong></td>
                    <td>0.882</td>
                    <td>1.0</td>
                    <td>0.874</td>
                    <td>0.84</td>
                    <td>0.838</td>
                    <td>0.843</td>
                    <td>0.904</td>
                    <td>0.902</td>
                </tr>
                <tr>
                    <td><strong>de</strong></td>
                    <td>0.88</td>
                    <td>0.874</td>
                    <td>1.0</td>
                    <td>0.847</td>
                    <td>0.844</td>
                    <td>0.845</td>
                    <td>0.871</td>
                    <td>0.901</td>
                </tr>
                <tr>
                    <td><strong>zh</strong></td>
                    <td>0.843</td>
                    <td>0.84</td>
                    <td>0.847</td>
                    <td>1.0</td>
                    <td>0.878</td>
                    <td>0.834</td>
                    <td>0.843</td>
                    <td>0.873</td>
                </tr>
                <tr>
                    <td><strong>ja</strong></td>
                    <td>0.841</td>
                    <td>0.838</td>
                    <td>0.844</td>
                    <td>0.878</td>
                    <td>1.0</td>
                    <td>0.833</td>
                    <td>0.838</td>
                    <td>0.863</td>
                </tr>
                <tr>
                    <td><strong>ru</strong></td>
                    <td>0.84</td>
                    <td>0.843</td>
                    <td>0.845</td>
                    <td>0.834</td>
                    <td>0.833</td>
                    <td>1.0</td>
                    <td>0.844</td>
                    <td>0.863</td>
                </tr>
                <tr>
                    <td><strong>pt</strong></td>
                    <td>0.877</td>
                    <td>0.904</td>
                    <td>0.871</td>
                    <td>0.843</td>
                    <td>0.838</td>
                    <td>0.844</td>
                    <td>1.0</td>
                    <td>0.899</td>
                </tr>
                <tr>
                    <td><strong>en</strong></td>
                    <td>0.9</td>
                    <td>0.902</td>
                    <td>0.901</td>
                    <td>0.873</td>
                    <td>0.863</td>
                    <td>0.863</td>
                    <td>0.899</td>
                    <td>1.0</td>
                </tr>
            </tbody>
        </table>
    );
}
