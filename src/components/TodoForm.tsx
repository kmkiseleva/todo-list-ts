import React, {useState} from "react";

interface TodoFormProps {
  onAdd(title: string): void
}

const TodoForm: React.FC<TodoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      props.onAdd(title);
      setTitle("");
    }
  }

  return (
    <div className="input-field mt3">
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Something to do..."
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Write what to do</label>
    </div>
  )
}

export default TodoForm;