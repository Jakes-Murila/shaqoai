import 'package:flutter/material.dart';

void main() => runApp(const ShaqoAiApp());

class ShaqoAiApp extends StatelessWidget {
  const ShaqoAiApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
        title: 'ShaqoAI',
        theme: ThemeData.dark(useMaterial3: true),
        home: const Scaffold(
          body: Center(child: Text('ShaqoAI mobile client scaffold')),
        ),
      );
}
