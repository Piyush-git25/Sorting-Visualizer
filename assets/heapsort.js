var heapSize;

function left(i) {
    return 2 * i + 1;
}

function right(i) {
    return 2 * i + 2;
}

async function maxHeapify(i) {
    var l = left(i);
    var r = right(i);
    var largest, temp;

    setColor(i, COMPARE);
    if (l < heapSize)
        setColor(l, LEFT);
    if (r < heapSize)
        setColor(r, RIGHT);

    await sleep(delay);

    if (l < heapSize && arr[l] > arr[i])
        largest = l;
    else
        largest = i;

    if (r < heapSize && arr[r] > arr[largest])
        largest = r;

    if (l < heapSize)
        setColor(l, UNSORTED);
    if (r < heapSize)
        setColor(r, UNSORTED);
    setColor(largest, SELECTED);

    await sleep(delay);
    if (largest != i) {
        swap(i, largest);
        updateSwaps();
        document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
        document.getElementById('count').style.color = 'red';
        await sleep(delay);
        document.getElementById('count').style.color = 'white';
        await sleep(delay);
        setColor(largest, COMPARE);
        setColor(i, SELECTED);
        await sleep(delay);

        setColor(largest, UNSORTED);
        setColor(i, UNSORTED);

        await maxHeapify(largest);
    }
    else
        setColor(i, UNSORTED);
}

async function buildMaxHeap() {
    heapSize = size;

    for (var i = Math.floor(size / 2) - 1; i >= 0; i--)
        await maxHeapify(i);
}

async function heapsort() {
    await sleep(delay);
    document.getElementById("info").innerHTML = `<div><ul>
    <li>Worst Case: O(nlogn)</li>
    <li>Avg Case: O(nlogn)</li>
    <li>Best Case: O(nlogn)</li>
    </ul></div>
    <div><ul>
    <li>Stable ❌</li>
    <li>Adaptive ❌</li>
    <li>In-Place ✅</li>
    </ul></div>`
    await buildMaxHeap();

    for (var i = size - 1; i > 0; i--) {
        setColor(0, SELECTED);
        setColor(i, COMPARE);
        await sleep(delay);

        setColor(0, COMPARE);
        setColor(i, SELECTED);
        swap(0, i);
        updateSwaps();
        document.getElementById('count').innerHTML = `Swaps - ${swaps}`;
        document.getElementById('count').style.color = 'red';
        await sleep(delay);
        document.getElementById('count').style.color = 'white';
        await sleep(delay);
        heapSize--;
        await sleep(delay);

        setColor(i, SORTED);

        await maxHeapify(0);
    }

    setColor(0, SORTED);
}
