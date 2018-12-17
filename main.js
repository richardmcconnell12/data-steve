let commitsTotal = 0;

githubData.forEach(steveEvent => {
    if (steveEvent.type === "PushEvent") {
        commitsTotal += steveEvent.payload.commits.length;
    }
})

console.log("Total Commits", commitsTotal);



let eventTypes = {
    PushEvent: 0,
    PullRequestEvent: 0,
    IssueCommentEvent: 0,
    DeleteEvent: 0,
    CreateEvent: 0
}

eventTypes.songs = 0;

githubData.forEach(stevent => {
    eventTypes[stevent.type] += 1;
})

console.log("event types and their totals", eventTypes);

let approvedUsers = [];

githubData.forEach(literallyAnything => {
    if (literallyAnything.type === "PullRequestEvent") {
        if (!approvedUsers.includes(literallyAnything.payload.pull_request.user.login)) {
            approvedUsers.push(literallyAnything.payload.pull_request.user.login);
        }
    }
})

console.log("approved users:", approvedUsers);

let reposEvents = {

}

githubData.forEach(eventObj => {
    console.log("repo name", eventObj.repo.name);
    reposEvents[eventObj.repo.name]++;
})

console.log("repos and their events", reposEvents)

let eventCommits = {}

githubData.forEach(githubEvent => {
    if (githubEvent.type === "PushEvent") {
        console.log("The event id as string", githubEvent.id, "commits length", githubEvent.payload.commits.length)
        eventCommits[githubEvent.id] = githubEvent.payload.commits.length;
    }
})

console.log("events and their commits", eventCommits);

githubData.forEach(stevent => {
    if (stevent.type === "PullRequestEvent") {
        console.log("language?", stevent.payload.pull_request.base.repo.language)
    }
})