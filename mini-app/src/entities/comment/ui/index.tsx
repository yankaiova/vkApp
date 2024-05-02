import { SimpleCell, Card, Text, Group } from "@vkontakte/vkui";
import { getCommentbyId } from "..";
import { formatDate } from "../../../shared/lib/utils/formatDate";
type props = { id: number };
import { useEffect } from "react";

export const CommentItem = ({ id }: props) => {
  const { isError, error, data, isSuccess } = getCommentbyId(id);

  useEffect(() => {
    console.log(
      (document.getElementsByClassName("text" + id)[0].innerHTML = data.text)
    );
  }, [isSuccess]);
  return (
    <>
      {isSuccess && (
        <Group>
          <Text>{data.by}</Text>
          <div className={"text" + id}>hbh</div>
          <Text>{formatDate(new Date(data.time * 1000))}</Text>
        </Group>
      )}
      {isError && <SimpleCell>{error.message}</SimpleCell>}
    </>
  );
};
