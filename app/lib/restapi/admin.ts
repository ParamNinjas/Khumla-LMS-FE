export async function getAdminAssessments(id: string) {

    const url = `https://khumla-dev-assessment-read.azurewebsites.net/api/Assessments/GetAssessmentsByUser?userId=${id}`;
    console.log("url", url)
    const assessments = await fetch(url).then((res) => res.json())
    return assessments;
}