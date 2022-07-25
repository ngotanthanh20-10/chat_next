import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVerticalIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import { ImportContacts } from "@mui/icons-material";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

const StyledSidebarButton = styled(Button)`
  width: 100%;
  border-top: 1px solid whitesmoke;
  border-bottom: 1px solid whitesmoke;
`;

const Sidebar = () => {
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      alert("error logging out");
    }
  };
  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title="USER EMAIL">
          <StyledUserAvatar />
        </Tooltip>
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVerticalIcon />
          </IconButton>
          <IconButton onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyledHeader>
      <StyledSearch>
        <SearchIcon />
        <StyledSearchInput placeholder="Search..." />
      </StyledSearch>
      <StyledSidebarButton>start a new conversation</StyledSidebarButton>

      <Dialog
				open={isOpenNewConversationDialog}
				onClose={closeNewConversationDialog}
			>
				<DialogTitle>New Conversation</DialogTitle>
				<DialogContent>
					<DialogContentText>
						Please enter a Google email address for the user you wish to chat
						with
					</DialogContentText>
					<TextField
						autoFocus
						label='Email Address'
						type='email'
						fullWidth
						variant='standard'
						value={recipientEmail}
						onChange={event => {
							setRecipientEmail(event.target.value)
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeNewConversationDialog}>Cancel</Button>
					<Button disabled={!recipientEmail} onClick={createConversation}>
						Create
					</Button>
				</DialogActions>
			</Dialog>
    </StyledContainer>
  );
};

export default Sidebar;
