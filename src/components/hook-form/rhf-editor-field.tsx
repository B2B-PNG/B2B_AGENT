// import { Controller, useFormContext } from "react-hook-form";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// export const RHFEditorField = ({ name, label }: { name: string; label?: string }) => {
//   const { control } = useFormContext();

//   return (
//     <div className="editor-wrapper">
//       {label && <label className="block mb-2 font-medium">{label}</label>}
//       <Controller
//         name={name}
//         control={control}
//         render={({ field }) => (
//           <CKEditor
//             editor={ClassicEditor}
//             data={field.value || ""} // CKEditor dùng 'data' thay vì 'value'
//             config={{
//               placeholder: "Nhập nội dung tại đây...",
//               // Bạn có thể tùy chỉnh toolbar tại đây nếu muốn giống ảnh hơn
//               toolbar: [
//                 "heading", "|", "bold", "italic", "link", "bulletedList", "numberedList", "blockQuote", "|",
//                 "insertTable", "mediaEmbed", "undo", "redo"
//               ]
//             }}
//             onChange={(_, editor) => {
//               const data = editor.getData();
//               field.onChange(data);
//             }}
//             onBlur={() => field.onBlur()}
//           />
//         )}
//       />
//     </div>
//   );
// };