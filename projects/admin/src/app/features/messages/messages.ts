import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface Contact {
  name: string;
  avatar: string;
  lastMessage: string;
  isOnline?: boolean;
}

interface Message {
  text: string;
  time: string;
  sent: boolean;
  senderAvatar?: string;
  senderName?: string;
}

@Component({
  selector: 'app-messages',
  imports: [CommonModule, FormsModule, MatIconModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  // Simple state for mobile view toggle
  showChat: boolean = false;

  // Contacts list
  contacts: Contact[] = [
    {
      name: 'Khawla Chebbi',
      avatar: 'images/user.jpg',
      lastMessage: 'cc',
      isOnline: true,
    },
    {
      name: 'Essid Haïthem',
      avatar: 'images/user.jpg',
      lastMessage: '.00',
    },
    {
      name: 'Manai',
      avatar: 'images/user.jpg',
      lastMessage: 'Fichier joint',
      isOnline: true,
    },
    {
      name: 'AYARI ABIR',
      avatar: 'images/user.jpg',
      lastMessage: 'Fichier joint',
    },
    {
      name: 'BEN HLOUA ALOUINI ABIR',
      avatar: 'images/user.jpg',
      lastMessage: 'Fichier joint',
    },
    {
      name: 'BOUJAAR ABIR',
      avatar: 'images/user.jpg',
      lastMessage: 'Fichier joint',
    },
  ];

  selectedContactIndex: number = 2;
  newMessage: string = '';

  // All conversations stored by contact index
  conversations: { [key: number]: Message[] } = {
    0: [
      {
        text: "Bonjour, j'ai une question",
        time: '10:30',
        sent: false,
        senderAvatar: 'images/user.jpg',
        senderName: 'Khawla Chebbi',
      },
      {
        text: 'Bonjour, comment puis-je vous aider?',
        time: '10:32',
        sent: true,
      },
      {
        text: 'cc',
        time: '10:35',
        sent: false,
        senderAvatar: 'images/user.jpg',
        senderName: 'Khawla Chebbi',
      },
    ],
    1: [
      {
        text: 'Salut',
        time: '09:15',
        sent: false,
        senderAvatar: 'images/user.jpg',
        senderName: 'Essid Haïthem',
      },
      {
        text: 'Bonjour, comment allez-vous?',
        time: '09:16',
        sent: true,
      },
      {
        text: '.00',
        time: '09:20',
        sent: false,
        senderAvatar: 'images/user.jpg',
        senderName: 'Essid Haïthem',
      },
    ],
    2: [
      {
        text: 'Bonjour, avez-vous reçu mon fichier?',
        time: '14:20',
        sent: false,
        senderAvatar: 'images/user.jpg',
        senderName: 'Manai',
      },
      {
        text: "Oui, je l'ai reçu. Merci!",
        time: '14:22',
        sent: true,
      },
      {
        text: 'ceci est un test',
        time: '5M',
        sent: true,
      },
      {
        text: 'message',
        time: '5M',
        sent: true,
      },
      {
        text: 'ok',
        time: '5M',
        sent: true,
      },
      {
        text: 'a',
        time: '5M',
        sent: true,
      },
      {
        text: 'fgd',
        time: '5M',
        sent: true,
      },
      {
        text: '.00',
        time: '5M',
        sent: true,
      },
    ],
  };

  private shouldScrollToBottom: boolean = false;

  ngOnInit(): void {
    this.loadMessagesForContact(this.selectedContactIndex);
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom) {
      this.scrollToBottom();
      this.shouldScrollToBottom = false;
    }
  }

  // When user clicks a contact
  selectContact(index: number): void {
    this.selectedContactIndex = index;
    this.loadMessagesForContact(index);
    this.showChat = true; // Show chat on mobile
  }

  // When user sends a message
  sendMessage(): void {
    const messageText = this.newMessage.trim();
    if (!messageText) return;

    // Create message with current time
    const now = new Date();
    const time = `${now.getHours().toString().padStart(2, '0')}:${now
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;

    // Create conversation if it doesn't exist
    if (!this.conversations[this.selectedContactIndex]) {
      this.conversations[this.selectedContactIndex] = [];
    }

    // Add message to conversation
    this.conversations[this.selectedContactIndex].push({
      text: messageText,
      time: time,
      sent: true,
    });

    // Update contact's last message
    this.contacts[this.selectedContactIndex].lastMessage = messageText;

    // Clear input and scroll
    this.newMessage = '';
    this.shouldScrollToBottom = true;
  }

  // Close chat on mobile (show contacts list)
  closeChat(): void {
    this.showChat = false;
  }

  // Load messages for a contact
  private loadMessagesForContact(index: number): void {
    // Create conversation if it doesn't exist
    if (!this.conversations[index]) {
      this.conversations[index] = [];
    }

    // Update last message in contacts list
    const messages = this.conversations[index];
    if (messages.length > 0) {
      this.contacts[index].lastMessage = messages[messages.length - 1].text;
    }

    this.shouldScrollToBottom = true;
  }

  // Scroll messages to bottom
  private scrollToBottom(): void {
    if (this.messagesContainer) {
      this.messagesContainer.nativeElement.scrollTop =
        this.messagesContainer.nativeElement.scrollHeight;
    }
  }
}
