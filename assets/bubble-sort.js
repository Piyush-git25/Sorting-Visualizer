async function bubbleSort() {
    var i, j;
    await sleep(delay);
    document.getElementById('count').innerHTML = `Swaps - 0`;
    document.getElementById("info").innerHTML = `<div><ul>
    <li>Worst Case: O(n²)</li>
    <li>Avg Case: O(n²)</li>
    <li>Best Case: O(n)</li>
    </ul></div>
    <div><ul>
    <li>Stable ✅</li>
    <li>Adaptive ✅</li>
    <li>In-Place ✅</li>
    </ul></div>`

    for (i = 0; i < size - 1; i++) {
        for (j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);
            var $element = $('<div>');
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                updateSwaps();
                document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
                document.getElementById('count').style.color = 'red';
                await sleep(delay);
                document.getElementById('count').style.color = 'white';
                await sleep(delay);
            }

            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }

        await sleep(delay);

        setColor(j, SORTED);
    }

    setColor(0, SORTED);
}
