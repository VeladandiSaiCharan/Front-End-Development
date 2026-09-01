const playlists = [
    [
        {
            trackId: "trk101",
            artist: "Velvet Comet",
            title: "Crimson Afterglow",
            votes: 5,
            bpm: 122
        },
        {
            trackId: "trk102",
            artist: "Neon Harbor",
            title: "Static Horizon",
            votes: 2,
            bpm: 108
        },
        {
            trackId: "trk103",
            artist: "Lunar Arcade",
            title: "Midnight Frequency",
            votes: 4,
            bpm: 128
        }
    ],
    [
        {
            trackId: "trk201",
            artist: "Solar Echo",
            title: "Glass Skyline",
            votes: 3,
            bpm: 115
        },
        {
            trackId: "trk202",
            artist: "Velvet Comet",
            title: "Satellite Hearts",
            votes: 6,
            bpm: 124
        }
    ]
];


function flattenPlaylists(playlists) {
    const result = [];

    if (!Array.isArray(playlists)) {
        return [];
    }

    for (let i = 0; i < playlists.length; i++) {
        for (let j = 0; j < playlists[i].length; j++) {
            const track = playlists[i][j];

            result.push({
                ...track,
                source: [i, j]
            });
        }
    }

    return result;
}


function scoreTracks(tracks) {
    const result = [];

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        result.push({
            ...track,
            score: track.votes * 10 - Math.abs(track.bpm - 120)
        });
    }

    return result;
}


function dedupeTracks(tracks) {
    const result = [];
    const seen = [];

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];

        if (!seen.includes(track.trackId)) {
            seen.push(track.trackId);
            result.push(track);
        }
    }

    return result;
}


function enforceArtistQuota(tracks, maxPerArtist) {
    const result = [];
    const artistCounts = {};

    for (let i = 0; i < tracks.length; i++) {
        const track = tracks[i];
        const artist = track.artist;

        if (artistCounts[artist] === undefined) {
            artistCounts[artist] = 0;
        }

        if (artistCounts[artist] < maxPerArtist) {
            result.push(track);
            artistCounts[artist]++;
        }
    }

    return result;
}


function buildSchedule(tracks) {
    const schedule = [];

    for (let i = 0; i < tracks.length; i++) {
        schedule.push({
            slot: i + 1,
            trackId: tracks[i].trackId
        });
    }

    return schedule;
}


function remixPlaylist(playlists, maxPerArtist) {
    const flattened = flattenPlaylists(playlists);

    const scored = scoreTracks(flattened);

    const deduped = dedupeTracks(scored);

    const quotaApplied = enforceArtistQuota(
        deduped,
        maxPerArtist
    );

    return buildSchedule(quotaApplied);
}