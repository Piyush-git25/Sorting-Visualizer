async function partition(p, r) {
    await sleep(delay);
    var i = p - 1;
    setColor(r, SELECTED);

    for (var j = p; j < r; j++) {
        await sleep(delay);

        if (arr[j] <= arr[r]) {
            i++;
            swap(i, j);
            updateSwaps();
            document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
            document.getElementById('count').style.color = 'red';
            await sleep(delay);
            document.getElementById('count').style.color = 'white';
            await sleep(delay);
            setColor(j, RIGHT);
            setColor(i, LEFT);
        }
        else
            setColor(j, RIGHT);
    }

    if (i + 1 < r) {
        await sleep(delay);

        swap(i + 1, r);
        updateSwaps();
        document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
        document.getElementById('count').style.color = 'red';
        await sleep(delay);
        document.getElementById('count').style.color = 'white';
        await sleep(delay);
        setColor(r, RIGHT);
        setColor(i + 1, SELECTED);
    }

    await sleep(delay);

    setColorRange(p, r, UNSORTED);

    return i + 1;
}

async function quicksort(p, r) {
    document.getElementById("info").innerHTML = `<div><ul>
    <li>Worst Case: O(n²)</li>
    <li>Avg Case: O(nlogn)</li>
    <li>Best Case: O(nlogn)</li>
    </ul></div>
    <div><ul>
    <li>Stable ❌</li>
    <li>Adaptive ❌</li>
    <li>In-Place ✅</li>
    </ul></div>`
    if (p < r) {
        var q = await partition(p, r);

        await quicksort(p, q - 1);

        setColorRange(p, q, SORTED);
        await quicksort(q + 1, r);

        setColorRange(q + 1, r, SORTED);
    }

    if (p == 0 && r == size - 1)
        await sleep(delay);
}
