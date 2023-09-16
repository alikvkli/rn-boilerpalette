import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from "react-native";
import {Theme} from "../../../theme";
import {CircleIconButton} from "../../buttons/CircleIconButton";

interface Comment {
    id: number;
    username: string;
    userAvatar: string;
    text: string;
    nestedComments?: Comment[];
}

interface CommentItemProps {
    comment: Comment;
    isNested?: boolean;
}

const CommentItem: React.FC<CommentItemProps> = ({comment, isNested}) => {
    const [replyText, setReplyText] = useState("");
    const [isReplying, setIsReplying] = useState(false);

    const renderNestedComments = (nestedComments?: Comment[]) => {
        if (!nestedComments || nestedComments.length === 0) {
            return null;
        }

        return (
            <View style={styles.nestedCommentsContainer}>
                {nestedComments.map((nestedComment, index) => (
                    <View key={index} style={styles.nestedCommentContainer}>
                        {!isNested && index === nestedComments.length - 1 ? (
                            <View style={[styles.nestedLine, {bottom: 0, width: 0}]}/>
                        ) : (
                            <View style={styles.nestedLine}/>
                        )}
                        <Image source={{uri: nestedComment.userAvatar}} style={styles.avatar}/>
                        <View style={styles.commentContent}>
                            <Text style={styles.username}>{nestedComment.username}</Text>
                            <Text style={styles.commentText}>{nestedComment.text}</Text>
                            {renderNestedComments(nestedComment.nestedComments)}
                        </View>
                    </View>
                ))}
            </View>
        );
    };

    const handleReplyClick = () => {
        setIsReplying(true);
    };

    const handleSendReply = () => {
        // Implement your logic to handle the reply here.
        // For this example, we're just logging it.
        console.log(`${comment.username}: ${replyText} yanıtla `);

        // Clear the reply input and hide it
        setReplyText("");
        setIsReplying(false);
    };

    return (
        <View style={styles.commentContainer}>
            <Image source={{uri: comment.userAvatar}} style={styles.avatar}/>
            <View style={styles.commentContent}>
                <View style={styles.header}>
                    <Text style={styles.username}>{comment.username}</Text>
                    {!isReplying ? (
                        <TouchableOpacity onPress={handleReplyClick}>
                            <Text style={styles.replyButton}>Yanıtla</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setIsReplying(false)}>
                            <Text style={styles.replyButton}>İptal</Text>
                        </TouchableOpacity>
                    )}
                </View>
                <Text style={styles.commentText}>{comment.text}</Text>
                {renderNestedComments(comment.nestedComments)}
                {isReplying && (
                    <View style={styles.replyContainer}>
                        <TextInput
                            style={styles.replyInput}
                            placeholder={`${comment.username} kullanıcısına cevap yaz... `}
                            onChangeText={(text) => setReplyText(text)}
                            value={replyText}
                        />
                        <TouchableOpacity onPress={handleSendReply}>
                            <CircleIconButton iconName="arrow-redo" iconColor={Theme.colors.primaryColor}/>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
        ;
};

const styles = StyleSheet.create({
    commentContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginVertical: 10,
    },
    nestedCommentsContainer: {
        marginLeft: 0,
        paddingLeft: 10,
    },
    nestedCommentContainer: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginTop: 10,
    },
    nestedLine: {
        width: 2,
        backgroundColor: "gray",
        position: "absolute",
        top: 0,
        left: 19,
        bottom: -10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    commentContent: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    commentText: {
        fontSize: 14,
        color: "black",
    },
    replyButton: {
        color: Theme.colors.primaryColor,
        marginTop: 5,
    },
    replyContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 12,
        gap:4
    },
    replyInput: {
        flex: 1,
        marginTop: 8,
        marginBottom: 10,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 20,
        padding: 8,
        height: 40,
        backgroundColor: 'rgba(151, 151, 151, 0.25)',
    },
    sendButton: {
        color: "blue",
    },
});

export default CommentItem;
