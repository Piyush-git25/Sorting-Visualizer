async function selectionSort() {
    var i, j, min_idx;
    document.getElementById("info").innerHTML = `<div><ul>
    <li>Worst Case: O(n²)</li>
    <li>Avg Case: O(n²)</li>
    <li>Best Case: O(n²)</li>
    </ul></div>
    <div><ul>
    <li>Stable ❌</li>
    <li>Adaptive ❌</li>
    <li>In-Place ✅</li>
    </ul></div>`
    for (i = 0; i < size - 1; i++) {
        await sleep(delay);

        min_idx = i;
        setColor(min_idx, SELECTED);

        for (j = i + 1; j < size; j++) {
            await sleep(delay);

            setColor(j, COMPARE);

            await sleep(delay);

            if (arr[j] < arr[min_idx]) {
                setColor(min_idx, UNSORTED);
                min_idx = j;
                setColor(min_idx, SELECTED);
                await sleep(delay);
            }
            else
                setColor(j, UNSORTED);
        }

        await sleep(delay);

        if (min_idx != i) {
            setColor(i, COMPARE);
            await sleep(delay);

            setColor(min_idx, COMPARE);
            setColor(i, SELECTED);
            swap(min_idx, i);
            updateSwaps();
            document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
            document.getElementById('count').style.color = 'red';
            await sleep(delay);
            document.getElementById('count').style.color = 'white';
            await sleep(delay);
        }

        setColor(min_idx, UNSORTED);
        setColor(i, SORTED);
    }

    setColor(size - 1, SORTED);
}
