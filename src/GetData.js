export async function GetAllProjects() {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}