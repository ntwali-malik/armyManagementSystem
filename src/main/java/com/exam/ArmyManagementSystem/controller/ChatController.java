package com.exam.ArmyManagementSystem.controller;

import java.util.Date;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.exam.ArmyManagementSystem.entity.ChatMessage;

@Controller
public class ChatController {


    @MessageMapping("/chat")
    @SendTo("/topic/messages")
    public ChatMessage sendMessage(@Payload ChatMessage chatMessage) {
        chatMessage.setTimestamp(new Date()); // Set the current timestamp
        return chatMessage;
    }
}
