import CreateForm from "../create/form";

type EditFormType = {
  title: string;
  description: string;
  videoScriptTone: string;
  instructorName: string;
  courseLogoUrl: string;
  thumbnailUrl: string;
  action: (formData: FormData) => void;
};

export default function EditForm({ title, description,videoScriptTone, instructorName, courseLogoUrl, thumbnailUrl, action }: EditFormType) {
  
  return (
    <CreateForm
      title={title}
      description={description}
      videoScriptTone={videoScriptTone}
      instructorName={instructorName}
      courseLogoUrl={courseLogoUrl}
      thumbnailUrl={thumbnailUrl}
      action={action}
    />
  );
}
