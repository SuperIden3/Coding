const ctrs = function convertToReadableStream(start, pull, cancel, type, autoAllocateChunkSize, highWaterMark, size) {
	let underlyingSource = {
		start,
		pull,
		cancel,
		type,
		autoAllocateChunkSize
	};
	let queuingStrategy = {
		highWaterMark,
		size
	};
	try {
		return new ReadableStream(underlyingSource, queuingStrategy);
	} catch(e) {
		console.error(e);
	}
}
